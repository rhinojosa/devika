import { writable } from 'svelte/store';

const getInitialSelectedProject = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    return localStorage.getItem('selectedProject') || '';
  }
  return '';
};

const getInitialSelectedModel = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    return localStorage.getItem('selectedModel') || '';
  }
  return '';
};

export const messages = writable([]);

export const selectedProject = writable(getInitialSelectedProject());
export const projectList = writable([]);

export const selectedModel = writable(getInitialSelectedModel());
export const modelList = writable([]);

export const agentState = writable(null);

export const internet = writable(true);

selectedProject.subscribe((value) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem('selectedProject', value);
  }
});

selectedModel.subscribe((value) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem('selectedModel', value);
  }
});