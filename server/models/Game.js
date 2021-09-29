const { Schema, model } = require('mongoose');
// const bcrypt = require('bcrypt');

const gameSchema = new Schema(
    {
        gameName: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        followers: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

// set up pre-save middleware to create password
// userSchema.pre('save', async function (next) {
//     if (this.isNew || this.isModified('password')) {
//         const saltRounds = 10;
//         this.password = await bcrypt.hash(this.password, saltRounds);
//     }

//     next();
// });

// compare the incoming password with the hashed password
// userSchema.methods.isCorrectPassword = async function (password) {
//     return bcrypt.compare(password, this.password);
// };

// userSchema.virtual('gameCount').get(function () {
//     return this.gameName.length;
// });

const Game = model('Game', gameSchema);

module.exports = Game;