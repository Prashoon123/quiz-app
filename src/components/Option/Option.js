import "./Option.css";

function Option({ option, className, disabled, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled === true ? true : false}
      className={`${className} option`}
      dangerouslySetInnerHTML={{
        __html: option,
      }}
    />
  );
}

export default Option;
