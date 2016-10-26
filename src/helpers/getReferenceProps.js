// @flow
import getTypeAnnotationWithoutInterface from './getTypeAnnotationWithoutInterface';

const BUILT_IN_GENERIC_TYPES = ['Object', 'Function'];

export default function getReferenceProps(j: Object, props: Array<Object>) {
  return props.reduce((arr, prop) => {
    if (
      prop.value.type === 'GenericTypeAnnotation' &&
      BUILT_IN_GENERIC_TYPES.indexOf(prop.value.id.name) === -1
    ) {
      arr.push(
        Object.assign({}, prop, { value: getTypeAnnotationWithoutInterface(j, prop.value) })
      );
    }
    return arr;
  }, []);
}
