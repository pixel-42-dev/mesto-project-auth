import mongoose from "mongoose";

interface IUser {
  name: string;
  about: string;
  avatar: string;
}

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Поле "name" должно быть заполнено'],
      minlength: [2, 'Минимальная длина "name" - 2 символа'],
      maxlength: [30, 'Максимальная длина "name" - 30 символов'],
    },
    about: {
      type: String,
      required: [true, 'Поле "about" должно быть заполнено'],
      minlength: [2, 'Минимальная длина "about" - 2 символа'],
      maxlength: [30, 'Максимальная длина "about" - 200 символов'],
    },
    avatar: {
      type: String,
      required: [true, 'В поле "avatar" должна быть указана ссылка на аватар'],
    },
  },
  { versionKey: false }
);

export default mongoose.model<IUser>('user', userSchema);
