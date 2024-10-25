FROM node

# 도커의 모든 후속 명령이 app 폴더 내부에서 실행될 것임
WORKDIR /app

# 첫 번째 점은 이 프로젝트의 모든 폴더, 하위 폴더 및 파일을 복사해야 한다고 도커에게 알림
# 두 번째 점은 그 파일을 저장해야 하는 이미지 내부의 경로
# 예를 들어 COPY . /app 이렇게 작성하면 dockerfile과 동일한 폴더에 있는 모든 파일과 거기에 있는 모든 하위 폴더가 컨테이너 내부의 app 폴더에 복사. 이 폴더가 존재하지 않으면 이미지와 컨테이너 생성
COPY package.json pnpm-lock.yaml ./


RUN npm install pnpm --global

RUN pnpm install

RUN rm -rf .next/cached

COPY . .

EXPOSE 3000

CMD ["pnpm", "dev"]