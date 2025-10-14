-- General, extensible schema for computational screening data
CREATE TABLE HostCrystal (
    id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(255) NOT NULL,
    description NVARCHAR(MAX)
);

CREATE TABLE Defect (
    id INT PRIMARY KEY IDENTITY(1,1),
    host_crystal_id INT NOT NULL,
    label NVARCHAR(255) NOT NULL,
    description NVARCHAR(MAX),
    FOREIGN KEY (host_crystal_id) REFERENCES HostCrystal(id)
);

CREATE TABLE DataCategory (
    id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(255) NOT NULL,
    description NVARCHAR(MAX)
);

CREATE TABLE DefectData (
    id INT PRIMARY KEY IDENTITY(1,1),
    defect_id INT NOT NULL,
    category_id INT NOT NULL,
    data_url NVARCHAR(1024), -- URL or path to data file
    metadata NVARCHAR(MAX),  -- JSON or text metadata
    created_at DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (defect_id) REFERENCES Defect(id),
    FOREIGN KEY (category_id) REFERENCES DataCategory(id)
);
