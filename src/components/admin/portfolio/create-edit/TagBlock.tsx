import React from "react";
import TagUnit from "@/components/common/TagUnit";

export default function TagBlock({
  allTags,
  currentTags,
  setCurrentTags,
  setAllTags,
  addTagRef,
  header,
}: {
  allTags: string[];
  currentTags: string[];
  setCurrentTags: React.Dispatch<React.SetStateAction<string[]>>;
  setAllTags: React.Dispatch<React.SetStateAction<string[]>>;
  addTagRef: React.RefObject<HTMLInputElement>;
  header: string;
}) {
  const toggleFeature = (name: string | undefined) => {
    if (!name) return;

    setCurrentTags((oldCurrentTags) => {
      let newCurrentTags;
      if (oldCurrentTags.includes(name)) {
        // remove name from currentFeatures
        newCurrentTags = [...oldCurrentTags];
        newCurrentTags.splice(newCurrentTags.indexOf(name), 1);
      } else {
        // add name to currentFeatures
        newCurrentTags = [...oldCurrentTags, name];
      }
      // console.log("newCurrentFeatures", newCurrentFeatures);
      return newCurrentTags;
    });
  };

  const addNewTag = () => {
    if (addTagRef.current == null) return;

    const newFeature = addTagRef.current.value.trim();

    if (newFeature.length === 0) return; // do not add empty tags

    setAllTags((allTags) => {
      if (!allTags.includes(newFeature)) {
        // check that the new feature is really new
        return [...allTags, newFeature];
      } else {
        return allTags;
      }
    });

    setCurrentTags((currentTags) => {
      if (!currentTags.includes(newFeature)) {
        // check that the new feature is really new
        return [...currentTags, newFeature];
      } else {
        return currentTags;
      }
    });

    addTagRef.current.value = ""; // Clear input
  };

  return (
    <div className="mt-10 mb-10">
      {header}
      <div>
        {allTags &&
          allTags.map((tagName) => {
            return (
              <TagUnit
                active={currentTags?.includes(tagName)}
                link={true}
                key={tagName}
                onClick={toggleFeature}
                name={tagName}
              >
                {tagName}
              </TagUnit>
            );
          })}

        <div className="flex items-center gap-2">
          <input
            placeholder="добавить..."
            className={
              "!w-1/3 mt-4 placeholder:text-slate-400  placeholder:text-[18px] !rounded-full !px-4"
            }
            name="new-feature"
            ref={addTagRef}
          ></input>
          <div
            onClick={addNewTag}
            className="bg-gray-700 hover:bg-gray-600 cursor-pointer text-white h-[30px] w-[30px] text-center rounded-full"
          >
            +
          </div>
        </div>
      </div>
    </div>
  );
}
