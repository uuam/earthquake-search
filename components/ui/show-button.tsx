import { Button } from "./button";

const ShowButton = ({
  onClick,
  buttonName,
  className
}: {
  onClick: any;
  buttonName: string;
  className?:string
}) => {
  return <Button className={className} onClick={onClick}>{buttonName}</Button>;
};

export default ShowButton;
