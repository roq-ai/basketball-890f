import * as yup from 'yup';

export const playerValidationSchema = yup.object().shape({
  name: yup.string().required(),
  team_id: yup.string().nullable(),
});
