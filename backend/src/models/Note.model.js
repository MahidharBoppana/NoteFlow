import moongose, {Schema} from 'mongoose';
import User from './User.model.js';

const NoteSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
    },

    content: {
        type: String,
        required: true,
        minlength: 3,
    },

    category: {
        type: String,
        trim: true,
    },

    isPinned: {
        type: Boolean,
        default: false
    },

    isTrashed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {timestamps: true});

const Note = moongose.model('Note', NoteSchema);
export default Note;