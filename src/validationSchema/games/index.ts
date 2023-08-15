import * as yup from 'yup';

export const gameValidationSchema = yup.object().shape({
  status: yup.string().required(),
  referee_id: yup.string().nullable(),
  team_id: yup.string().nullable(),
});
