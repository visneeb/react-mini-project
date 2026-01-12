export interface FormErrors {
  name: string;
  email: string;
  selectMovie: string;
}

export interface FormData {
  name: string;
  email: string;
  selectMovie: string;
  comment: string;
}

export function validateFormData(data: FormData): FormErrors {
  const errors: FormErrors = {
    name: "",
    email: "",
    selectMovie: "",
  };

  if (!data.name.trim()) {
    errors.name = "โปรดใส่ชื่อของคุณ";
  }

  if (!data.email.trim()) {
    errors.email = "โปรดใส่อีเมลของคุณ";
  } else if (data.email && !/^\S+@\S+\.\S+$/.test(data.email)) {
    errors.email = "รูปแบบอีเมลไม่ถูกต้อง";
  }

  if (!data.selectMovie) {
    errors.selectMovie = "กรุณาเลือกหนังที่คุณชอบ";
  }

  return errors;
}

export function hasErrors(errors: FormErrors): boolean {
  return !!errors.name || !!errors.email || !!errors.selectMovie;
}
