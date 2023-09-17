export const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/books") {
          resolve({
            status: 200,
            message: "Success",
            data: {
              // https://prepinsta.com/wp-content/uploads/2021/12/cognizant-genc-interview-experience.webp
              books: [
               
                {
                id: 8,
                title: "Interview Experience",
                ReadMe:"https://drive.google.com/drive/folders/1ey1lCJ18BzYW3UuNV1rKubFwXHFizyKa?usp=drive_link",
                author: "Nikhil K Naroliya",
                Source: "ON Youtube",
                year: 2023,
                image:
                  "https://static.vecteezy.com/system/resources/thumbnails/021/563/903/small/neon-icon-set-interview-users-set-of-red-blue-yellow-neon-icon-on-dark-transparent-background-vector.jpg",
                price: 'free',
                Studied: false
              },
              {
                id: 5,
                title: "DBMS And SQL",
                ReadMe:"https://drive.google.com/file/d/1BwuE9DG7sknHeb_p3DekpBKZshrWBEfK/view?usp=drive_link",
                author: "Love Babbar",
                Source: "ON Youtube",
                year: 2023,
                image:
                  "https://img.freepik.com/premium-photo/virtual-cloud-data-storage-server-with-neon-lights-ai_76964-6101.jpg?w=740",
                price: 'free',
                Studied: false
              },
              {
                id: 1,
                title: "Computer Network",
                author: "Aman Dhattarwal",
                Source: "ON Youtube",
                ReadMe:"https://drive.google.com/file/d/1c0HufJuF3gFIcBXqMbl3gpeAToRPr3nX/view?usp=drive_link",
                year: 2022,
                image:
                  "https://img.freepik.com/free-vector/computer-technician-with-wrench-repairing-computer-screen-with-gears-computer-service-laptop-repair-center-notebook-setup-service-concept-bright-vibrant-violet-isolated-illustration_335657-954.jpg?w=1060&t=st=1694347941~exp=1694348541~hmac=34aa6e77791b34af0c09f1934fa180401800f6b1c25ae609e3269659fbd16974",
                price: 'free',
                Studied: false
              },

                
              {
                id: 2,
                title: "Operating System",
                author: "Love Babbar",
                Source: "ON Youtube",
                ReadMe:"https://drive.google.com/file/d/12Pp9FvfW5kCPMZ4AYCf-oA0pOXNLonkM/view?usp=drive_link",
                year: 2023,
                image:
                  "https://img.freepik.com/free-vector/cloud-computing-concept_24908-55292.jpg?w=826&t=st=1694354047~exp=1694354647~hmac=308828e819ea64b97a4009932b43169e4524db7482cfb0edfc4254b995cecc39",
                price: 'free',
                Studied: false
              },

              {  id: 7,
                title: "NITA College Notes",
                ReadMe:"https://drive.google.com/drive/folders/1f3Dt84v-yHefAOzg44r3cUttKNjguIS0",
                author: "Nikhil K Naroliya",
                Source: "ON Youtube",
                year: 2023,
                image:
                  "https://img.freepik.com/free-vector/school-hallway-night-interior-with-doors-lockers_107791-1566.jpg?w=1380&t=st=1694347873~exp=1694348473~hmac=db1d9f5b7270c3a770b49e58d1d65e75fbdfb9edf56106eb70a173bed785fdb3",
                price: 'free',
                Studied: false
              },

                

            
                {
                  id: 9,
                  title: "Node JS",
                  ReadMe:"https://drive.google.com/drive/folders/1poTMAva7Yvalfu6jTj-Tj6L-7QnzzXWt",
                  author: "Nikhil K Naroliya",
                  Source: "ON Youtube",
                  year: 2023,
                  image:
                    "https://wallpapercave.com/wp/wp6606913.png",
                  price: 'free',
                  Studied: false
                },
                
                {
                  id: 3,
                  title: "OOPS",
                  author: "Aman Dhattarwal",
                  ReadMe:"https://drive.google.com/file/d/1aKdE703BpvDUCa23DHnKNYRAQSWbWGB3/view?usp=drive_link",
                  Source: "ON Youtube",
                  year: 2022,
                  image:
                    "https://img.freepik.com/free-vector/freelance-programming-isometric-composition-with-infographic-images-people-characters-editable-text-with-colourful-images_1284-26960.jpg?w=740&t=st=1694354523~exp=1694355123~hmac=52972522bac2991bb3400f77f549d6043284b6e294597a3a93de9cd2cdc78ed4",
                  price: 'free',
                  Studied: false
                },
                {
                  id: 6,
                  title: "DSA Sheet",
                  ReadMe:"https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
                  author: "Striver",
                  Source: "ON Youtube",
                  year: 2023,
                  image:
                    "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?w=996&t=st=1694354619~exp=1694355219~hmac=51bfd5e4427ed8a041caea142a4e8813121d5df30e75002f25860511c4410309",
                  price: 'free',
                  Studied: false
                }
                ,
                {
                  id: 4,
                  title: "React Js",
                  ReadMe:"https://drive.google.com/file/d/1wn0u89u8Pm9yIfZ-BlXm1Of-tjW71QIm/view?usp=drive_link",
                  author: "Nikhil Naroliya",
                  Source: "On Linked In",
                  year: 2022,
                  image:
                    "https://img.freepik.com/free-vector/hand-drawn-flat-design-homepage-illustration_23-2149258059.jpg?w=740&t=st=1694355274~exp=1694355874~hmac=e1e367a1832ae5f842386887b9ab6df8c8ba51e7a98533ea29d746a36600797e",
                  price: 'free',
                  Studied: false
                },
            
             
              
              ],
              user: {
                name: "Nikhil",
                bio: " Placement Phodoge ",
                img:
                  "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/12/no-akshay-kumar-no-hera-pheri-3-finally-worked-producers-to-bring-back-khiladi-001.jpg"
              }
            }
          });
        } else {
          reject({
            status: 404,
            message: "Books list not found."
          });
        }
      }, 2000);
    });
  };
  