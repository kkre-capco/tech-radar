import { technologyList, data, technologies } from "../../src/data/data";
import { getNextItem, getPrevItem } from "../../src/helpers/helpers";

const segmentClass = [
  ".DevOps-segment",
  ".Data.Engineering-segment",
  ".Quality.Engineering-segment",
  ".Cloud.Platforms-segment",
  ".Integration-segment",
  ".Backend-segment",
  ".Frontend-segment",
  ".Mobile-segment",
];

const whiteSpace = (technology: string) => {
  return technology.replace(/\s+/g, "-");
};

describe("End to end", () => {
  it("should highlight each segment when mouse is hovered", () => {
    cy.visit("/home");
    segmentClass.forEach((segment: string) => {
      return (
        cy
          .get(segment)
          .trigger("mouseover")
          .should("have.css", "fill", "rgba(235, 35, 109, 0.3)")
          .and("not.have.css", "fill", "transparent"),
        cy.wait(2000)
      );
    });
  });

  it("should hover over each icon and check that icon pop up appears and displays technology text", () => {
    technologyList.forEach((label: string) => {
      return (
        cy.visit("/home"),
        cy.get(`[aria-label="${label}"]`).eq(0).trigger("mouseover"),
        label === "Flutter" &&
          cy.get(`[aria-label="${label}"]`).eq(1).trigger("mouseover"),
        cy.wait(2000),
        cy.log("label", label),
        cy
          .get(".MuiTooltip-popper")
          .should("be.visible")
          .and(
            "have.text",
            label !== "Flutter" ? `${label}` : `${label}${label}`
          )
          .and("not.have.text", getPrevItem(label))
      );
    });
  });

  it("should click into each technology within the Dev Ops segment", () => {
    cy.viewport(1440, 900);
    cy.visit("/home");
    cy.get(".DevOps-segment").trigger("mouseover");
    cy.wait(3000);
    cy.get(".DevOps-segment").click();
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/category/devops");
      expect(location.pathname).to.not.eq("/category/data-engineering");
    });
    cy.wait(3000);
    technologies.map((tech: any) => {
      if (tech.categoryName === "DevOps") {
        // cy.log("tech.categoryName", tech.categoryName);
        tech.technologies.forEach((item: any) => {
          cy.visit("/category/devops");
          // cy.log("item", item);
          cy.contains("a", `${item}`).click({ force: true });
          cy.location().should((location) => {
            expect(location.pathname).to.eq(
              `/technology/devops/${item.toLowerCase()}`
            );
          });
          cy.wait(2000);
          if (cy.contains("a", "View Projects")) {
            cy.contains("a", "View Projects").click({ force: true });
            cy.location().should((location) => {
              expect(location.pathname).to.eq(
                `/projects/devops/${item.toLowerCase()}`
              );
            });
            cy.wait(2000);
          }
        });
      }
    });
  });

  it("should click into each technology within the Data Engineering segment", () => {
    cy.viewport(1440, 900);
    cy.visit("/home");
    cy.get(".Data.Engineering-segment").trigger("mouseover");
    cy.wait(3000);
    cy.get(".Data.Engineering-segment").click();
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/category/data-engineering");
      expect(location.pathname).to.not.eq("/category/quality-engineering");
    });
    cy.wait(3000);
    technologies.map((tech: any) => {
      if (tech.categoryName === "Data Engineering") {
        // cy.log("tech.categoryName", tech.categoryName);
        tech.technologies.forEach((item: any) => {
          cy.visit("/category/data-engineering");
          // cy.log("item", item);
          cy.contains("a", `${item}`).click({ force: true });
          cy.location().should((location) => {
            expect(location.pathname).to.eq(
              `/technology/data-engineering/${whiteSpace(item).toLowerCase()}`
            );
          });
          cy.wait(2000);
          if (cy.contains("a", "View Projects")) {
            cy.contains("a", "View Projects").click({ force: true });
            cy.location().should((location) => {
              expect(location.pathname).to.eq(
                `/projects/data-engineering/${whiteSpace(item).toLowerCase()}`
              );
            });
            cy.wait(2000);
          }
        });
      }
    });
  });

  it("should click into each technology within the Quality Engineering segment", () => {
    cy.viewport(1440, 900);
    cy.visit("/home");
    cy.get(".Quality.Engineering-segment").trigger("mouseover");
    cy.wait(3000);
    cy.get(".Quality.Engineering-segment").click();
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/category/quality-engineering");
      expect(location.pathname).to.not.eq("/category/cloud-&-platforms");
    });
    cy.wait(3000);
    technologies.map((tech: any) => {
      if (tech.categoryName === "Quality Engineering") {
        // cy.log("tech.categoryName", tech.categoryName);
        tech.technologies.forEach((item: any) => {
          cy.visit("/category/quality-engineering");
          // cy.log("item", item);
          cy.contains("a", `${item}`).click({ force: true });
          cy.location().should((location) => {
            expect(location.pathname).to.eq(
              `/technology/quality-engineering/${whiteSpace(
                item
              ).toLowerCase()}`
            );
          });
          cy.wait(2000);
          if (cy.contains("a", "View Projects")) {
            cy.contains("a", "View Projects").click({ force: true });
            cy.location().should((location) => {
              expect(location.pathname).to.eq(
                `/projects/quality-engineering/${whiteSpace(
                  item
                ).toLowerCase()}`
              );
            });
            cy.wait(2000);
          }
        });
      }
    });
  });

  it("should click into each technology within the Cloud & Platforms segment", () => {
    cy.viewport(1440, 900);
    cy.visit("/home");
    cy.get(".Cloud.Platforms-segment").trigger("mouseover");
    cy.wait(3000);
    cy.get(".Cloud.Platforms-segment").click();
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/category/cloud-&-platforms");
      expect(location.pathname).to.not.eq("/category/integration");
    });
    cy.wait(3000);
    technologies.map((tech: any) => {
      if (tech.categoryName === "Cloud & Platforms") {
        // cy.log("tech.categoryName", tech.categoryName);
        tech.technologies.forEach((item: any) => {
          cy.visit("/category/cloud-&-platforms");
          // cy.log("item", item);
          cy.contains("a", `${item}`).click({ force: true });
          cy.location().should((location) => {
            expect(location.pathname).to.eq(
              `/technology/cloud-&-platforms/${whiteSpace(item).toLowerCase()}`
            );
          });
          cy.wait(2000);
          if (cy.contains("a", "View Projects")) {
            cy.contains("a", "View Projects").click({ force: true });
            cy.location().should((location) => {
              expect(location.pathname).to.eq(
                `/projects/cloud-&-platforms/${whiteSpace(item).toLowerCase()}`
              );
            });
            cy.wait(2000);
          }
        });
      }
    });
  });

  it("should click into each technology within the Integration segment", () => {
    cy.viewport(1440, 900);
    cy.visit("/home");
    cy.get(".Integration-segment").trigger("mouseover");
    cy.wait(3000);
    cy.get(".Integration-segment").click();
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/category/integration");
      expect(location.pathname).to.not.eq("/category/backend");
    });
    cy.wait(3000);
    technologies.map((tech: any) => {
      if (tech.categoryName === "Integration") {
        // cy.log("tech.categoryName", tech.categoryName);
        tech.technologies.forEach((item: any) => {
          cy.visit("/category/integration");
          // cy.log("item", item);
          cy.contains("a", `${item}`).click({ force: true });
          cy.location().should((location) => {
            expect(location.pathname).to.eq(
              `/technology/integration/${whiteSpace(item).toLowerCase()}`
            );
          });
          cy.wait(2000);
          if (cy.contains("a", "View Projects")) {
            cy.contains("a", "View Projects").click({ force: true });
            cy.location().should((location) => {
              expect(location.pathname).to.eq(
                `/projects/integration/${whiteSpace(item).toLowerCase()}`
              );
            });
            cy.wait(2000);
          }
        });
      }
    });
  });

  it("should click into each technology within the Backend segment", () => {
    cy.viewport(1440, 900);
    cy.visit("/home");
    cy.get(".Backend-segment").trigger("mouseover");
    cy.wait(3000);
    cy.get(".Backend-segment").click();
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/category/backend");
      expect(location.pathname).to.not.eq("/category/frontend");
    });
    cy.wait(3000);
    technologies.map((tech: any) => {
      if (tech.categoryName === "Backend") {
        // cy.log("tech.categoryName", tech.categoryName);
        tech.technologies.forEach((item: any) => {
          cy.visit("/category/backend");
          // cy.log("item", item);
          cy.contains("a", `${item}`).click({ force: true });
          cy.location().should((location) => {
            expect(location.pathname).to.eq(
              `/technology/backend/${whiteSpace(item).toLowerCase()}`
            );
          });
          cy.wait(2000);
          if (cy.contains("a", "View Projects")) {
            cy.contains("a", "View Projects").click({ force: true });
            cy.location().should((location) => {
              expect(location.pathname).to.eq(
                `/projects/backend/${whiteSpace(item).toLowerCase()}`
              );
            });
            cy.wait(2000);
          }
        });
      }
    });
  });

  it("should click into each technology within the Frontend segment", () => {
    cy.viewport(1440, 900);
    cy.visit("/home");
    cy.get(".Frontend-segment").trigger("mouseover");
    cy.wait(3000);
    cy.get(".Frontend-segment").click();
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/category/frontend");
      expect(location.pathname).to.not.eq("/category/mobile");
    });
    cy.wait(3000);
    technologies.map((tech: any) => {
      if (tech.categoryName === "Frontend") {
        // cy.log("tech.categoryName", tech.categoryName);
        tech.technologies.forEach((item: any) => {
          cy.visit("/category/frontend");
          // cy.log("item", item);
          cy.contains("a", `${item}`).click({ force: true });
          cy.location().should((location) => {
            expect(location.pathname).to.eq(
              `/technology/frontend/${whiteSpace(item).toLowerCase()}`
            );
          });
          cy.wait(2000);
          if (cy.contains("a", "View Projects")) {
            cy.contains("a", "View Projects").click({ force: true });
            cy.location().should((location) => {
              expect(location.pathname).to.eq(
                `/projects/frontend/${whiteSpace(item).toLowerCase()}`
              );
            });
            cy.wait(2000);
          }
        });
      }
    });
  });

  it("should click into each technology within the Mobile segment", () => {
    // cy.log("cy.log(techData)", techData);
    cy.viewport(1440, 900);
    cy.visit("/home");
    cy.get(".Mobile-segment").trigger("mouseover");
    cy.wait(3000);
    cy.get(".Mobile-segment").click();
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/category/mobile");
      expect(location.pathname).to.not.eq("/category/devops");
    });
    cy.wait(3000);
    technologies.map((tech: any) => {
      if (tech.categoryName === "Mobile") {
        // cy.log("tech.categoryName", tech.categoryName);
        tech.technologies.forEach((item: any) => {
          cy.visit("/category/mobile");
          // cy.log("item", item);
          cy.contains("a", `${item}`).click({ force: true });
          cy.location().should((location) => {
            expect(location.pathname).to.eq(
              `/technology/mobile/${whiteSpace(item).toLowerCase()}`
            );
          });
          cy.wait(2000);
          if (cy.contains("a", "View Projects")) {
            cy.contains("a", "View Projects").click({ force: true });
            cy.location().should((location) => {
              expect(location.pathname).to.eq(
                `/projects/mobile/${whiteSpace(item).toLowerCase()}`
              );
            });
            cy.wait(2000);
          }
        });
      }
    });
  });
});
