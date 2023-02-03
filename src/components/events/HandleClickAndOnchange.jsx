export const HandleClickAndOnchange = () => {
  function handleClick(e) {
    return alert("has hecho click");
  }

  function handleInput(e) {
    console.log(e.target.name);
    console.log(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit");
  }
  return (
    <div className="titles">
      <form onSubmit={handleSubmit}>
        {" "}
        <h2>Events</h2>
        <input type="text" name="example" value="" onChange={handleInput} />
        <button onClick={handleClick}>Click me</button>
      </form>
    </div>
  );
};
