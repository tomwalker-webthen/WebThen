(function(root){
 'use strict';
 const releases={win95:'1995-08-24',win98:'1998-06-25',win2000:'2000-02-17',me:'2000-09-14',xp:'2001-10-25',classic:'1984-01-24',mac:'2001-03-24',modern:'2010-01-01'};
 function stamp(date){return new Date(date).toISOString().slice(0,10)}
 function defaultForDate(date){const day=stamp(date);return day<'1999-07-01'?'win95':day<'2003-01-01'?'win98':'xp'}
 function available(theme,date){return !!releases[theme]&&releases[theme]<=stamp(date)}
 function resolve(date,era,saved){return saved?.era===era&&available(saved.theme,date)?saved.theme:defaultForDate(date)}
 const api={releases,defaultForDate,available,resolve};if(typeof module==='object'&&module.exports)module.exports=api;else root.WebThenThemePolicy=api;
})(globalThis);
