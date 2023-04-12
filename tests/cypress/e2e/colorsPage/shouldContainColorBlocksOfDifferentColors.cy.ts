import { colorsPage } from '/Users/admin/Desktop/frontend-guidelines/tests/cypress/support/colorsPageObject';

describe('Colors page', () => {
    beforeEach(() => {
        colorsPage.visitTheColorsPage();;
    });

    it('should contain color blocks of different CSS colors', () => {
        colorsPage.countTheColorBlocksOnThePage();

        colorsPage.countTheNumberOfDistinctBlocClolors();

        colorsPage.assertBlocksHaveDifferentColors();
    });
  });
