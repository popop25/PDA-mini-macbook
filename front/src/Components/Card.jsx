import { Card } from "flowbite-react";
// 최상단 div 그리드 css 속성을 지우고 불러오는 컴포넌트에서 사용하면 됩니다.
function ComponentCard() {
  return (
    <div className="grid grid-cols-4 gap-4">
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
    </div>
  );
}
