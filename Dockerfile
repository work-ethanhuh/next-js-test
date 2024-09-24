# 베이스 이미지 설정
FROM node:18-alpine

# 작업 디렉토리 설정
WORKDIR /app

# 종속성 설치
COPY package.json package-lock.json ./
RUN npm install

# Add a build argument to invalidate the cache
ARG CACHE_BUSTER=1

# 소스 코드 복사
RUN echo "After copying files:" && ls -al && echo "Rebuild to invalidate cache $CACHE_BUSTER"
COPY .next ./.next
COPY node_modules ./node_modules
COPY . .

# 빌드 명령 실행
RUN npm run build

# Next.js 앱 실행
CMD ["npm", "start"]