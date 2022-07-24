# git 사용법 간단 정리

Git 기본 명령어

    git init : 새로운 로컬 리포지토리를 생성
    git add : 변경된 파일을 스토리지에 추가
    git commit : add 한 파일에 한하여 로컬 리포지토리에 저장
    git push : 로컬 리포지토리를 리모트 리포지토리에 업로드 (git hub)

Git 생성부터 업로드까지 한 사이클

1. 깃허브에 리포지토리 생성 \*리모트 리포지토리 주소 복사
2. 터미널을 통하여 업로드할 폴더로 이동
3. 작업 폴더에서 git init 실행
4. 필요 파일 git add 실행
5. Git 상태 확인 git status 실행
6. 커밋할 상태 확인 후 커밋 실행 git commit -m “//commit comments”
7. Remote 등록 git remote add origin {remote repository 주소} 등록
8. Remote에 푸시 git push origin {브랜치 명}
9. 완료

리포지토리에 업로드 \*명령어는 위와 같음

1. Git add
2. Git commit
3. Git push
4. 완료
