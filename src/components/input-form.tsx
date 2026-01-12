import { Input } from "./ui/input";
import { FieldError } from "./ui/field-error";
import { getErrorInputProps } from "@/utils/field-styles";

function InputForm({
  name,
  setName,
  email,
  setEmail,
  nameError,
  emailError,
}: {
  name: string;
  setName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  nameError?: string;
  emailError?: string;
  className?: string;
}) {
  return (
    <div className="text-left flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <label htmlFor="name" className="text-sm font-medium ">
          ชื่อ <span className="text-red-500"> *</span>
        </label>
        <Input
          type="text"
          placeholder="กรุณากรอกชื่อของคุณ"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          {...getErrorInputProps(nameError)}
          className="flex h-10 w-full rounded-md border bg-background border-gray-200 px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        />
        <FieldError error={nameError} />
      </div>
      <div className="flex flex-col gap-3">
        <label
          htmlFor="email"
          className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium"
        >
          อีเมล<span className="text-red-500"> *</span>
        </label>
        <Input
          type="email"
          placeholder="example@email.com"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          {...getErrorInputProps(emailError)}
          className="flex h-10 w-full rounded-md border bg-background border-gray-200 px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        />
        <FieldError error={emailError} />
      </div>
    </div>
  );
}

export default InputForm;
