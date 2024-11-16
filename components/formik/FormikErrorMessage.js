import { useFormikContext } from 'formik';

function FormikErrorMessage({ name, showError, msg }) {
  const { errors, touched } = useFormikContext();
  const isError = showError || (errors[name] && touched[name]);
  if (!isError) return null;
  return (
    <div className="flex items-center space-x-1.5 text-red-600 text-xs mt-1.5">
      <div>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"></path>
          </g>
        </svg>
      </div>
      <span>{msg || errors[name]}</span>
    </div>
  );
}

export default FormikErrorMessage;
