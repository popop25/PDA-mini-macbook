import { Card } from "flowbite-react";

function ComponentCard() {
  return (
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc=""
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        brand Name
      </h5>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        title
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">price</p>
    </Card>
  );
}
