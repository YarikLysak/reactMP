import React from 'react';
import * as Redux from 'react-redux'
import { act } from 'react-dom/test-utils';
import thunk from "redux-thunk";
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import CardModalBody from '../components/CardManageModals/CardModalBody';

const mockMovies = [{
  id: "fake1",
  title: "fake 1",
  genres: ["0"],
  description: "Lorem ipsum dolor",
  runTime: "133",
  year: "2018-01-01",
},
{
  id: "fake2",
  title: "fake 2",
  genres: ["3"],
  description: "Lorem ipsum dolor",
  runTime: "138",
  year: "2004-01-01",
}];

const mockGenres = [
  { code: "0", title: "genre 1" },
  { code: "1",  title: "genre 2"}
];

const mockStore = configureMockStore([thunk]);

describe('CardModalBody', () => {
  let component;
  const store = mockStore ({
    movies: {list: mockMovies},
    genres: {list: mockGenres},
    sortBy:[]
  });
  const mockClose = jest.fn();

  const wrapper = (store, movie)=> mount(
    <Redux.Provider store={store} >
      <CardModalBody setIsOpen={mockClose} editedMovie={movie}/>
    </Redux.Provider>
  );

  describe('First render', () => {
    const store = mockStore ({
      movies: {list: mockMovies},
      genres: {list: []},
      sortBy:[]
    });

    test("should be defined", () => {
      component = wrapper(store);
      expect(component).toBeDefined();
    });

  });

  describe('Close button', () => {
    component = wrapper(store);
    const closeBtn = component.find("[data-test='modal-close'] svg");

    test('should render close button', () => {
      expect(closeBtn).toBeDefined();
    });

    test('should close modal', () => {
      closeBtn.props().onClick();
      expect(mockClose).toHaveBeenCalled();
    });
  });

  describe('Heading with special text', () => {
    let headingText;

    test("should be Add movie", () => {
      component = wrapper(store);
      headingText = component.find("[data-test='modal-header'] h4").text();
      expect(headingText).toEqual('Add movie');
    });

    test("should be Edit movie", () => {
      component = wrapper(store,  mockMovies[0]);
      headingText = component.find("[data-test='modal-header'] h4").text();
      expect(headingText).toEqual('Edit movie');
    });
  });

  describe('Form', () => {
    component = wrapper(store,  mockMovies[0]);
    const form = component.find("[data-test='modal-form']");

    test('should be defined', () => {
      expect(form).toBeDefined();
    });

    test('should render fields', () => {
      const fields = form.find("input").getElements();
      expect(fields.length).toEqual(5);
    });

    describe('Buttons', () => {
      const btnBlock= form.find("[data-test='form-btns'] button");

      test('should render buttons block', () => {
        const buttons = btnBlock.getElements();
        expect(buttons.length).toEqual(2);
      });

      describe('Reset button', () => {
        const resetBtn = btnBlock.find("[type='reset']");

        test('should be defined', () => {
          const resetBtnText = resetBtn.text();
          expect(resetBtnText).toEqual('Reset');
        });

        test('after click should close form modal', () => {
          act(() => resetBtn.props().onClick());
          expect(mockClose).toHaveBeenCalled();
        });
      });

      describe('Save button', () => {
        const saveBtn = btnBlock.find("[type='submit']");

        test('should render save buttons', () => {
          const saveBtnText = saveBtn.text();
          expect(saveBtnText).toEqual('Save');
        });

        test('should submit on click', async () => {
          const preventDefault = jest.fn();
          await act(async () => form.simulate('submit', { preventDefault }));

          expect(preventDefault).toHaveBeenCalled()
        });
      });
    });
  });

});


