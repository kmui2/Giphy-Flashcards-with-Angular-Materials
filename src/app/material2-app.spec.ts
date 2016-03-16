import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {Material2AppApp} from '../app/material2-app';

beforeEachProviders(() => [Material2AppApp]);

describe('App: Material2App', () => {
  it('should have the `defaultMeaning` as 42', inject([Material2AppApp], (app: Material2AppApp) => {

  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([Material2AppApp], (app: Material2AppApp) => {

    }));
  });
});

