import { useState } from "react";


function TextAreaInPage(props) {
  const handleOnclick = () => {

    let newtext = text.toUpperCase();
    settext(newtext);

  }
  const handleOnclick2 = () => {
    let newtext2 = text.toLowerCase();
    settext(newtext2);
  }

  const handleonchange = (event) => {
    settext(event.target.value);
  }
  const [text, settext] = useState('enter the hading here');

  return (
    <>

      <h3>{props.heading}</h3>
      <div class="form-floating">
        <textarea className="form-control" onChange={handleonchange} placeholder="Leave a comment here" id="floatingTextarea" value={text}></textarea>
        <button onClick={handleOnclick}>Covert to Uppercase</button>

        <button onClick={handleOnclick2}>Covert to lowercase</button>

        <button onClick={() => { settext("") }}>Clear</button>
      </div>


    </>
  );
}
export default TextAreaInPage;
