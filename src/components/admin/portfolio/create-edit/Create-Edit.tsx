"use client";
import { useFormState } from "react-dom";
import FormButton from "@/components/common/formButton";
import { useState, useRef } from "react";
import { createPortfolioItem } from "@/actions/portfolio/create";
import { editPortfolioItem } from "@/actions/portfolio/edit";
import FormInput from "@/components/common/formInput";
import DropzoneInput from "@/components/admin/portfolio/dropzone/dropzoneInput";
import TagBlock from "./TagBlock";

interface Image {
  name: string;
  id: string;
}

interface Tag {
  name: string;
  id: string;
}

export default function CreateEditPortfolioForm({
  id,
  heading,
  livelink,
  order,
  imageData,
  allFeatures,
  startingFeatures,
  allTechnologies,
  startingTechnologies,
  allRoles,
  startingRoles,
  isEdit = false,
}: {
  id?: string;
  heading?: string;
  livelink?: string | null;
  order?: number | null;
  imageData: Image[];
  allFeatures: Tag[];
  startingFeatures: Tag[];
  allTechnologies: Tag[];
  startingTechnologies: Tag[];
  allRoles: Tag[];
  startingRoles: Tag[];
  isEdit?: boolean;
}) {
  const usedAction = isEdit ? editPortfolioItem : createPortfolioItem;

  const [formState, action] = useFormState(usedAction, {
    errors: {},
  });

  // state for images
  const [arrString, setArrString] = useState(JSON.stringify(imageData));
  const updateArrString = (imageArray: Image[]) => {
    setArrString(JSON.stringify(imageArray));
  };

  // state for features
  const addFeatureRef = useRef<HTMLInputElement | null>(null);
  const [allFeatureNames, setAllFeaturesNames] = useState(
    allFeatures.map((feature) => feature.name)
  );
  const [currentFeatures, setCurrentFeatures] = useState(
    startingFeatures.map((feature) => feature.name)
  ); // array of features as strings ['feature1', 'feature2'..]

  // state for Technologies
  const addTechnologyRef = useRef<HTMLInputElement | null>(null);
  const [allTechnologiesNames, setAllTechnologies] = useState(
    allTechnologies.map((technology) => technology.name)
  );
  const [currentTechnologies, setCurrentTechnologies] = useState(
    startingTechnologies.map((technology) => technology.name)
  ); // array of features as strings ['technology1', 'technology2'..]

  // state for Roles
  const addRoleRef = useRef<HTMLInputElement | null>(null);
  const [allRolesNames, setAllRoles] = useState(
    allRoles.map((role) => role.name)
  );
  const [currentRoles, setCurrentRoles] = useState(
    startingRoles.map((role) => role.name)
  ); // array of features as strings ['role1', 'role2'..]

  return (
    <form className={`admin-form`} action={action}>
      <FormInput name="heading" formState={formState} defaultValue={heading}>
        Заголовок
      </FormInput>

      <div className="mt-10">
        <DropzoneInput
          dbSavedFileNames={imageData}
          updateArrString={updateArrString}
        />
      </div>

      <TagBlock
        allTags={allFeatureNames}
        currentTags={currentFeatures}
        setCurrentTags={setCurrentFeatures}
        setAllTags={setAllFeaturesNames}
        addTagRef={addFeatureRef}
        header={"Фичи"}
      />

      <TagBlock
        allTags={allTechnologiesNames}
        currentTags={currentTechnologies}
        setCurrentTags={setCurrentTechnologies}
        setAllTags={setAllTechnologies}
        addTagRef={addTechnologyRef}
        header={"Технологии"}
      />
      <TagBlock
        allTags={allRolesNames}
        currentTags={currentRoles}
        setCurrentTags={setCurrentRoles}
        setAllTags={setAllRoles}
        addTagRef={addRoleRef}
        header={"Роли"}
      />

      <FormInput
        name="livelink"
        formState={formState}
        defaultValue={livelink !== null ? livelink : ""}
      >
        Ссылка в интернете
      </FormInput>

      <div className="mt-8">
        <label htmlFor="order">Порядок показа:</label>
        <div className="w-16">
          <input
            name="order"
            type="number"
            defaultValue={order !== null ? order : ""}
          ></input>
        </div>
        {formState.errors && (
          <div className="error">{formState.errors?.order?.join(", ")}</div>
        )}
      </div>

      {formState.errors && (
        <div className="error">{formState.errors?._form?.join(", ")}</div>
      )}

      <div className="flex justify-center mt-4">
        <FormButton small={true}>
          {isEdit ? "Сохранить" : "Создать"} пункт
        </FormButton>
      </div>

      {isEdit && <input type="hidden" name="id" value={id} />}
      <input type="hidden" name="fileNamesArr" value={arrString} />
      <input
        type="hidden"
        name="featuresJSON"
        value={JSON.stringify(currentFeatures)}
      />
      <input
        type="hidden"
        name="technologiesJSON"
        value={JSON.stringify(currentTechnologies)}
      />
      <input
        type="hidden"
        name="rolesJSON"
        value={JSON.stringify(currentRoles)}
      />
    </form>
  );
}
