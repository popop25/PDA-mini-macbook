import React from 'react';
import { Card } from 'flowbite-react';

export default function User() {
  return (
    <Card className="max-w-sm">
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                <img
                  alt="/"
                  height="32"
                  src="https://www.flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-4.jpg&w=32&q=75"
                  width="32"
                  className="rounded-full"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Neil Sims</p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$320</div>
            </div>
          </li>
        </ul>
      </div>
    </Card>
  );
}