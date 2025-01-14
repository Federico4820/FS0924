import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";
import { useEffect, useState } from "react";

const CommentArea = function (props) {
  const [comments, setComments] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // componentDidMount = async () => {
  //   try {
  //     let response = await fetch(
  //       'https://striveschool-api.herokuapp.com/api/comments/' +
  //         this.props.asin,
  //       {
  //         headers: {
  //           Authorization:
  //             'Bearer inserisci-qui-il-tuo-token',
  //         },
  //       }
  //     )
  //     console.log(response)
  //     if (response.ok) {
  //       let comments = await response.json()
  //       this.setState({ comments: comments, isLoading: false, isError: false })
  //     } else {
  //       console.log('error')
  //       this.setState({ isLoading: false, isError: true })
  //     }
  //   } catch (error) {
  //     console.log(error)
  //     this.setState({ isLoading: false, isError: true })
  //   }
  // }

  useEffect(
    () =>
      async function (prevProps) {
        if (prevProps.asin !== props.asin) {
          setisLoading(true);
          try {
            let response = await fetch(
              "https://striveschool-api.herokuapp.com/api/comments/" +
                props.asin,
              {
                headers: {
                  Authorization: "Bearer inserisci-qui-il-tuo-token",
                },
              }
            );
            console.log(response);
            if (response.ok) {
              let comments = await response.json();
              setComments(comments);
              setisLoading(false);
              setIsError(false);
            } else {
              setisLoading(false);
              setIsError(true);
            }
          } catch (error) {
            console.log(error);
            setisLoading(false);
            setIsError(true);
          }
        }
      },
    [props.asin]
  );

  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={props.asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;
