import { colorsPage } from '/Users/admin/Desktop/frontend-guidelines/tests/cypress/support/colorsPageObject';

describe('Colors page', () => {
    it('should contain color blocks of different CSS colors', () => {
        colorsPage.visitTheColorsPage();

        colorsPage.countTheColorBlocksOnThePage();

        colorsPage.countTheNumberOfDistinctBlocClolors();

        colorsPage.assertBlocksHaveDifferentColors();
    });
  });

  