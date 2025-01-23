export const functions = {
  getTechnologies: async () => {
    const response = await fetch("/assets/data/techskills.json");
    if (!response.ok) {
      throw new Error(
        `Failed to fetch technologies. Status: ${response.status}`
      );
    }
    return response.json();
  },

  getCertifications: async () => {
    const response = await fetch("/assets/data/certification.json");
    if (!response.ok) {
      throw new Error(
        `Failed to fetch certifications. Status: ${response.status}`
      );
    }
    return response.json();
  },

  getProjects: async () => {
    const response = await fetch("/assets/data/projects.json");
    if (!response.ok) {
      throw new Error(`Failed to fetch projects. Status: ${response.status}`);
    }
    return response.json();
  },

  getSocials: async () => {
    const response = await fetch("/assets/data/socials.json");
    if (!response.ok) {
      throw new Error(`Failed to fetch socials. Status: ${response.status}`);
    }
    return response.json();
  },

  getWorkExp: async () => {
    const response = await fetch("/assets/data/workexp.json");
    if (!response.ok) {
      throw new Error(
        `Failed to fetch work experiences. Status: ${response.status}`
      );
    }
    return response.json();
  },

  getResume: async () => {
    const response = await fetch("/assets/data/dummy-file.pdf");
    if (!response.ok) {
      throw new Error(`Failed to fetch resume. Status: ${response.status}`);
    }
    const contentType = response.headers.get("Content-Type");
    
    if (contentType !== "application/pdf") {
      throw new Error(`Expected PDF, but got ${contentType}`);
    }

    const blob = await response.blob();
    return blob;
  },

  getCount: async () => {
    try {
      const response = await fetch(
        "https://getcount.azurewebsites.net/api/GetCount"
      );
      if (!response.ok) {
        throw new Error(
          `Failed to fetch visitor count. Status: ${response.status}`
        );
      }
      const data = await response.json();
      return data.count;
    } catch (error) {
      console.error("Failed to fetch visitor count.", error);
      return null;
    }
  },
};
