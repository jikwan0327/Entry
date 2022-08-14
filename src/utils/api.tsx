import axios from "axios";
import Swal from "sweetalert2";

export const URL = "https://freshman.entrydsm.hs.kr";

export const ReqLogin = (id: string, password: string) => {
  return function () {
    axios({
      method: "post",
      url: URL + "/users/login",
      data: {
        account_id: id,
        password: password,
      },
    })
      .then((res) => {
        localStorage.setItem("accessToken", res.data.access_token);
        Swal.fire("로그인 성공!", "You success the login!", "success").then(() => {
          window.location.href = "/";
        });
      })
      .catch((err) => {
        Swal.fire("로그인 오류", "아이디와 비밀번호를 다시 입력해주세요", "error");
      });
  };
};

export const ReqSignUp = (id: string, password: string, name: string) => {
  return function () {
    axios({
      method: "post",
      url: URL + "/users/signup",
      data: {
        account_id: id,
        password: password,
        name,
      },
    })
      .then((res) => {
        localStorage.setItem("accessToken", res.data.access_token);
        Swal.fire("회원가입 성공", "회원가입에 성공하였습니다", "success").then(() => {
          window.location.href = "/";
        });
      })
      .catch(() => {
        Swal.fire("회원가입 실패", "회원가입에 실패하였습니다", "error").then(() => {
          window.location.href = "/";
        });
      });
  };
};

export const ReqPosting = (title: string, content: string) => {
  return function () {
    axios
      .post(
        URL + "/posts",
        { title, content },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
        }
      )
      .then(() => {
        Swal.fire("게시글 성공", "게시글이 정상적으로 추가 되었습니다", "success").then(() => {
          window.location.href = "/";
        });
      })
      .catch(() => {
        Swal.fire("실패", "게시글을 추가하는데에 실패하였습니다", "error");
      });
  };
};
