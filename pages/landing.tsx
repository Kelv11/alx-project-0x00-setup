import React from "react";
import Card from "@/components/card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-xl font-extralight mb-8">Landing Page</h1>

      {/* Button Examples */}
      <div className="mb-8">
        <h2 className="text-lg font-medium mb-4">Button Variations</h2>
        <div className="flex flex-wrap gap-4 mb-4">
          <Button title="Small Rounded SM" size="small" shape="rounded-sm" />
          <Button title="Small Rounded MD" size="small" shape="rounded-md" />
          <Button
            title="Small Rounded Full"
            size="small"
            shape="rounded-full"
          />
        </div>
        <div className="flex flex-wrap gap-4 mb-4">
          <Button title="Medium Rounded SM" size="medium" shape="rounded-sm" />
          <Button title="Medium Rounded MD" size="medium" shape="rounded-md" />
          <Button
            title="Medium Rounded Full"
            size="medium"
            shape="rounded-full"
          />
        </div>
        <div className="flex flex-wrap gap-4 mb-4">
          <Button title="Large Rounded SM" size="large" shape="rounded-sm" />
          <Button title="Large Rounded MD" size="large" shape="rounded-md" />
          <Button
            title="Large Rounded Full"
            size="large"
            shape="rounded-full"
          />
        </div>
        <div className="flex flex-wrap gap-4">
          <Button
            title="Custom Style"
            size="medium"
            shape="rounded-md"
            styles="bg-red-500 hover:bg-red-600"
          />
          <Button
            title="Another Custom"
            size="large"
            shape="rounded-full"
            styles="bg-green-500 hover:bg-green-600"
          />
        </div>
      </div>

      {/* Card Examples */}
      <div>
        <h2 className="text-lg font-medium mb-4">Property Cards</h2>
        <div className="flex flex-wrap gap-4">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Landing;
