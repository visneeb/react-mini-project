import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FieldError } from "@/components/ui/field-error";
import movies from "./data/movies-list";

function RadioMovies({
  selectMovie,
  setSelectMovie,
  error,
}: {
  selectMovie: string;
  setSelectMovie: (value: string) => void;
  error?: string;
}) {
  return (
    <div className="text-left text-sm font-medium flex flex-col gap-3">
      <p>
        เลือกหนังที่คุณชอบ<span className="text-red-500"> *</span>
      </p>
      <div
        className={`space-y-3 ${
          error ? "border border-red-500 rounded-md p-3 " : "border-gray-300"
        }`}
      >
        <RadioGroup
          value={selectMovie}
          onValueChange={setSelectMovie}
          className="grid gap-6 space-y-3 p-3"
        >
          {movies.map((movie) => (
            <div key={movie.title} className="flex  space-x-2">
              <RadioGroupItem
                value={movie.title}
                id={movie.title}
                className="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
              />
              <Label
                htmlFor={movie.title}
                className="flex flex-col items-start"
              >
                {movie.title} ({movie.year})
                <div className="text-gray-500">Director: {movie.director}</div>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      <FieldError error={error} />
    </div>
  );
}

export default RadioMovies;
