import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={css.errorContainer}>
      <p className={css.errorText}>Something went wrong!</p>
    </div>
  );
};

export default ErrorMessage;
