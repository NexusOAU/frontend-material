"use client";

import { InputField } from "@/components/FormUI/InputField";
import { Icons } from "@/components/SVGIcons/Icons";
import { RegisterSchema } from "@/components/Schemas/register.schema";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField } from "@/components/ui/form";
import { SearchableSelector } from "@/components/utils/SearchableSelector";
import { Selector } from "@/components/utils/Selector";
import { filterData } from "@/dataServices/filterData";
import { ResourcesType } from "@/dataServices/resourcesType";
import { schoolData } from "@/dataServices/schoolData";
import { sessionData } from "@/dataServices/sessionData";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface IDoc {
  onNext: () => void;
  onBack: () => void;
}

export const DocumentForm = ({ onNext, onBack }: IDoc) => {
  const [isLoading, setLoading] = useState(false);

  const form = useForm({
    // resolver: zodResolver(RegisterSchema),
    defaultValues: {
      username: "",
      fileSession: null,
      level: null,
      type: null,
      school: "",
      lecturerName: "",
    },
  });

  const onSubmit = async (values: any) => {
    console.log(values);

    onNext();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-6 w-full md:w-[70vw]"
      >
        <InputField
          label="Document title"
          control={form.control}
          name="username"
          placeholder="Document title"
          description="e.g Elementary Mathematics or MATH 101"
          showDescription
        />

        <InputField
          label="Lecturer's name"
          control={form.control}
          name="lecturerName"
          placeholder="Lecturer(s) name"
          description="Seperate names by comma if there are mutiple lecturers"
          showDescription
        />

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormControl>
              <Selector
                title="Choose type"
                data={ResourcesType}
                {...field}
                placeholder="Choose file type"
              />
            </FormControl>
          )}
        />

        <FormField
          control={form.control}
          name="fileSession"
          render={({ field }) => (
            <FormControl>
              <Selector
                title="Session or year"
                data={sessionData}
                {...field}
                placeholder="Choose year or session"
              />
            </FormControl>
          )}
        />

        <FormField
          control={form.control}
          name="school"
          render={({ field }) => (
            <FormControl>
              <SearchableSelector
                setValue={form.setValue}
                emptyState={"No school found"}
                searchPlaceholder="Start typing..."
                data={schoolData}
                {...field}
                triggerPlaceholder="Which school is this for?"
              />
            </FormControl>
          )}
        />

        <FormField
          control={form.control}
          name="level"
          render={({ field }) => (
            <FormControl>
              <Selector
                title="Choose level"
                data={filterData}
                {...field}
                placeholder="Choose Level"
              />
            </FormControl>
          )}
        />


     
        <Button
          onClick={onBack}
          variant="outline"
          disabled={isLoading}
          type="button"
          className="w-full md:mt-10"
        >
          Back
        </Button>
        <Button disabled={isLoading} type="submit" className="w-full md:mt-10">
          {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}{" "}
          Next
        </Button>
      </form>
    </Form>
  );
};
