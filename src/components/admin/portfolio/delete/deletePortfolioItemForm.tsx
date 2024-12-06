"use client";
import { useFormState } from "react-dom";
import FormButton from "@/components/common/formButton";
import { deletePortfolioItem } from "@/actions/portfolio/delete";

export default function DeletePortfolioItemForm(props: { id: string }) {
  const [formState, action] = useFormState(deletePortfolioItem, {
    errors: {},
  });
  return (
    <form action={action}>
      <FormButton color={"red"} small={true}>
        Удалить
      </FormButton>
      <input type="hidden" name="id" value={props.id} />
      {formState.errors && (
        <div className="error">{formState.errors?._form?.join(", ")}</div>
      )}
    </form>
  );
}
