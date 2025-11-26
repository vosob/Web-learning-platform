import { Button } from "./components/ui/button";

export const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-normal ">
        <span className="text-gradient-text-green">Welcome</span> to the Web
        Learning Platform
      </h1>
      <Button variant={"default"}>Click me</Button>
    </div>
  );
};
