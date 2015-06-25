var expect = require('chai').expect;
var React = require('react/addons');
var renderTarget, component;

describe('displaying article overview', () => {
  var categories = [{id:1}, {id:2}];
  var articles = [{id:3}, {id:4}];

  beforeEach(() => {
    var ComponentClass = require('../../app/components/app.react.js');
    renderTarget = document.getElementsByTagName('body')[0];

    var dataAccess = {
      getCategoriesAndArticles: () => {
        return {
          categories: categories,
          articles: articles
        };
      }
    };
    var Store = require('../../app/store.js');
    var ActionCreator = require('../../app/action-creator.js');
    var store = new Store();
    var actionCreator = new ActionCreator(dataAccess, store);

    var renderedComponent = React.render(<ComponentClass actionCreator={actionCreator} store={store}/>, renderTarget);
    component = renderedComponent;
  });

  afterEach(() => {
    React.unmountComponentAtNode(renderTarget);
    component = null;
  });

  describe('server has some categories and articles', () => {
    it('should display categories from server', () => {
      expect(component.state.categories).to.deep.equal(categories);
    });

    it('should display articles from server', () => {
      expect(component.state.categories).to.deep.equal(categories);
    });
  });
});