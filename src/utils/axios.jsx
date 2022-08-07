import axios from "axios";

export const URL = "https://freshman.entrydsm.hs.kr";

export const ReqLogin = (id, password) => {
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
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
        alert("\t로그인 오류\n 아이디와 비밀번호를 다시 입력해주세요");
      });
  };
};

export const ReqSignUp = (id, password, name) => {
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
        console.log(res.data);
        localStorage.setItem("accessToken", res.data.access_token);
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const ReqPosting = (title, content) => {
  return function () {
    axios
      .post(
        URL + "/posts",
        { title, content },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
        }
      )
      .then((res) => {
        console.log(res.data);
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const ReqEditMyPage = (img, name, introduce) => {
  return function () {
    axios
      .patch(
        URL + "/users/mypage",
        { profile_image_url: img, name, introduce },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// export const ReqDelete = (id) => {
//   return function () {
//     axios.delete(URL + "/posts/", {
//       headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
//     });
//     window.location.href = "/";
//     alert("hi");
//   };
// };

// export const ReqEditPost = (id, title, content) => {
//   return function () {
//     axios
//       .patch(
//         URL + `/users/${id}`,
//         { title, content },
//         {
//           headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
//         }
//       )
//       .then((res) => {
//         console.log(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };
