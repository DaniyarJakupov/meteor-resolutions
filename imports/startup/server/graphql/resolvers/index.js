import ResolutionResolver from './resolution-resolver';

export default {
  Query: {
    getResolutions: ResolutionResolver.getResolutions,
  },
  Mutation: {
    createResolution: ResolutionResolver.createResolution,
  },
};
