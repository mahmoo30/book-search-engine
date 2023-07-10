const { Book, User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('books')
                return userData;
            }
            throw new AuthenticationError('Not logged in'); 
        },
        books: async () => {
            return Book.find();
        },
        book: async (parent, { bookId }) => {
            const params = bookId ? { bookId } : {};
            return Book.find(params);
        },
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return { token, user };
        },
        createUser: async (parent, {username, email, password}) => {
            const user = await User.create({username, email, password});
            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return { token, user };
        },
        saveBook: async (parent, {input}, context) => {
            if (context.user) {
                try {
                    const updatedUser = await User.findOneAndUpdate(
                        { _id: context.user._id },
                        { $addToSet: { savedBooks: input } },
                        { new: true, runValidators: true }
                    );
                    return updatedUser;
                } catch (err) {
                    console.log(err);
                    return err;
                }
            }
        },
        deleteBook: async (parent, {bookId}, context) => {
            if (context.user) {
                const book = await Book.findOneAndDelete({
                    _id: bookId,
                    bookAuthor: context.user.username,
                });
                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { books: book._id } }
                );
                return book;
              }
              throw new AuthenticationError('You need to be logged in!');
        },

    },
};

module.exports = resolvers;