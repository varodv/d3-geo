import { ProportionalAreaMap } from './';

function setupTest({ element }: { element: HTMLDivElement }): {
  component: ProportionalAreaMap;
} {
  const component = new ProportionalAreaMap(element);
  return {
    component,
  };
}

describe('ProportionalAreaMap', () => {
  test('should render its name inside the passed element', () => {
    const element = document.createElement('div');
    setupTest({ element });

    expect(element.innerHTML).toEqual('ProportionalAreaMap');
  });
});
