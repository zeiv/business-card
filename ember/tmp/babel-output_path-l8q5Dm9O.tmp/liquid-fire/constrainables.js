define('liquid-fire/constrainables', ['exports', 'liquid-fire/ember-internals'], function (exports, _liquidFireEmberInternals) {
  'use strict';

  exports['default'] = {
    oldValue: {
      reversesTo: 'newValue',
      accessor: function accessor(conditions) {
        return [versionValue(conditions, 1)];
      }
    },
    newValue: {
      reversesTo: 'oldValue',
      accessor: function accessor(conditions) {
        return [versionValue(conditions, 0)];
      }
    },
    oldRoute: {
      reversesTo: 'newRoute',
      accessor: function accessor(conditions) {
        return (0, _liquidFireEmberInternals.routeName)(versionValue(conditions, 1));
      }
    },
    newRoute: {
      reversesTo: 'oldRoute',
      accessor: function accessor(conditions) {
        return (0, _liquidFireEmberInternals.routeName)(versionValue(conditions, 0));
      }
    },
    oldModel: {
      reversesTo: 'newModel',
      accessor: function accessor(conditions) {
        return (0, _liquidFireEmberInternals.routeModel)(versionValue(conditions, 1));
      }
    },
    newModel: {
      reversesTo: 'oldModel',
      accessor: function accessor(conditions) {
        return (0, _liquidFireEmberInternals.routeModel)(versionValue(conditions, 0));
      }
    },
    helperName: {},
    outletName: {},
    parentElementClass: {
      accessor: function accessor(conditions) {
        var cls = conditions.parentElement.attr('class');
        if (cls) {
          return cls.split(/\s+/);
        }
      }
    },
    parentElement: {},
    firstTime: {},
    oldModalComponent: {
      reversesTo: 'newModalComponent',
      accessor: function accessor(conditions) {
        var value = versionValue(conditions, 1);
        if (value) {
          return [value.name];
        }
      }
    },
    newModalComponent: {
      reversesTo: 'oldModalComponent',
      accessor: function accessor(conditions) {
        var value = versionValue(conditions, 0);
        if (value) {
          return [value.name];
        }
      }
    },
    media: {}
  };

  function versionValue(conditions, index) {
    var versions = conditions.versions;
    return versions[index] ? versions[index].value : null;
  }
});