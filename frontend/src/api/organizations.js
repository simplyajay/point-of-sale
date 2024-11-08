export const addOrganization = async (org) => {
  try {
    const res = await fetch("http://localhost:3001/api/organizations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(org),
    });

    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      console.error("Failed to create organization");
    }
  } catch (error) {
    console.error("Error creating organization", error);
  }
};
