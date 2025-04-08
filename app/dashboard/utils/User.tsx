interface User {
  id: number;
  name: string;
  acctBalance: string;
  IsAdmin: boolean;
}

export const UserData = (props: User) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-3 justify-center">
        <div className="rounded-md h-7 w-7 object-cover overflow-hidden flex items-center justify-center bg-gradient-to-t from-primary via-primary/80 to-primary/60">
          {props.name.charAt(0)}
        </div>
        <div className="">
          <h3 className="text-white  capitalize text-sm font-dm-regular">Hi, {props.name}</h3>
          <p className="text-sm text-primary font-dm-light ">
            {props.acctBalance}
          </p>
        </div>
        {props.IsAdmin ? <div className="">delete user</div> : ""}
      </div>
    </div>
  );
};
