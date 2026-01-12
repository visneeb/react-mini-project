import { useState } from "react";
import { useFormValidation } from "@/hooks/useFormValidation";
import type { FormData } from "@/utils/validation";
import InputForm from "./input-form";
import RadioMovies from "./movies-radio";
import { ConmmentTextarea } from "./comment";
import FormButton from "./submit-reset-button";
import InfoCard from "./info-card";
import { Film } from "lucide-react";

function FormBody() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [comment, setComment] = useState("");

  const {
    formData,
    errors,
    validate,
    updateField,
    reset: resetForm,
  } = useFormValidation({
    name: "",
    email: "",
    selectMovie: "",
    comment: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      const formDataWithComment: FormData = {
        ...formData,
        comment,
      };
      console.log("Form Data:", formDataWithComment);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    resetForm();
    setComment("");
  };

  const handleNewForm = () => {
    handleReset();
    setIsSubmitted(false);
  };

  return (
    <main className=" flex items-center justify-center">
      <div className="rounded-lg border-0 bg-card text-card-foreground w-full max-w-md shadow-lg bg-white">
        <div className="flex flex-col space-y-1.5 p-6 bg-linear-to-r from-purple-700 to-indigo-600 text-white">
          <div className="font-semibold tracking-tight flex items-center gap-2 text-2xl">
            <Film />
            Movies Survey
          </div>
        </div>
        <form
          noValidate
          onSubmit={handleSubmit}
          onReset={handleReset}
          className="space-y-6 pt-6 pb-6"
        >
          {!isSubmitted && (
            <>
              <div className="px-6 flex flex-col gap-5">
                <InputForm
                  name={formData.name}
                  setName={(value) => updateField("name", value)}
                  email={formData.email}
                  setEmail={(value) => updateField("email", value)}
                  nameError={errors.name}
                  emailError={errors.email}
                />
                <RadioMovies
                  selectMovie={formData.selectMovie}
                  setSelectMovie={(value) => updateField("selectMovie", value)}
                  error={errors.selectMovie}
                />
                <ConmmentTextarea comment={comment} setComment={setComment} />
              </div>
              <FormButton />
            </>
          )}
          {isSubmitted && (
            <InfoCard
              name={formData.name}
              email={formData.email}
              movie={formData.selectMovie}
              comment={comment}
              resetForm={handleNewForm}
            />
          )}
        </form>
      </div>
    </main>
  );
}

export default FormBody;
