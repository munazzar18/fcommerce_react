import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/users.slice";

const PostAuther = ({ userId }: { userId: { id: number; name: string } }) => {
  const users = useSelector(selectAllUsers);
  console.log("ID:", userId);
  const author = users.find((user) => user.id === userId.id);
  return <span>by {author ? author.name : "Unknown Author"} </span>;
};

export default PostAuther;
