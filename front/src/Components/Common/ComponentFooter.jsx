import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export default function ComponentFooter() {
  return (
    <div className="flex flex-col p-1 mt-8">
      {/* Footer 부분 */}
      <Footer container>
        <div className="w-full p-1">
          {" "}
          {/* 상단과 하단의 패딩을 줄임 */}
          <div className="grid justify-between w-full sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <Footer.Brand
                src="https://www.nizform.com/ByStoreFile/105073/preview/view_105073.jpg"
                alt="Logo"
                height="80px" // 로고 크기 조정
                width="80px"
              />
            </div>
            <div className="grid grid-cols-4 gap-4 sm:gap-4 sm:mt-0">
              {" "}
              {/* 간격과 마진 조정 */}
              <div>
                <Footer.Title title="Team1" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">김영석</Footer.Link>
                  <Footer.Link href="#">정우성</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Team2" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">정희수</Footer.Link>
                  <Footer.Link href="#">박민지</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Github</Footer.Link>
                  <Footer.Link href="#">Notion</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="flex items-center justify-between w-full py-2">
            {" "}
            {/* 패딩 조정 */}
            <Footer href="#" by="Flowbite™" year={2022} />
            <div className="flex space-x-4">
              {" "}
              {/* 아이콘 간격 조정 */}
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="#" icon={BsGithub} />
              <Footer.Icon href="#" icon={BsDribbble} />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
}
