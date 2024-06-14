import { ReactNode } from "react";
import Body from "./Body";
import Footer from "./Footer";

function Title() {
  return (
    <div className="flex justify-around">
      <Title2 body={"holaaa"} children={<Body />} children2={<Footer />} />
    </div>
  );
}

interface bodyTitle {
  body: string;
  children: ReactNode;
  children2: ReactNode;
}

function Title2(props: bodyTitle) {
  const { body } = props;
  const { children } = props;
  const { children2 } = props;
  return (
    <div>
      <h1>
        {body}
        {children}
        {children2}
      </h1>
    </div>
  );
}

export default Title;
