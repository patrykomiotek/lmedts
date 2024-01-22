interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

// export const fetchLukeSkywalker = (): Promise<LukeSkywalker> => {
//   return fetch("https://swapi.dev/api/people/1")
//     .then((res, error) => {
//       return res.json();
//     })
//     .then((data, error) => {
//       console.log(data);
//       return data;
//     })
//     // .catch(error => console.error(error))
// };

class HttpError extends Error {}
class ValidationError extends Error {}

export const fetchLukeSkywalker = async (): Promise<
  LukeSkywalker | undefined
> => {
  try {
    const response = await fetch("https://swapi.dev/api/people/1");
    const data = await response.json();

    return data;
  } catch (e) {
    if (e instanceof HttpError) {
      //
    } else if (e instanceof ValidationError) {
      //
    }

    console.error(e);
    return undefined;
  }
};
